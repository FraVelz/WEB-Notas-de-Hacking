import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconSearch, IconTimes } from '@/components/icons';
// import searchIndex from '@/searchIndex.js'; // Archivo eliminado - componente antiguo no usado
const searchIndex = {}; // Placeholder temporal

function Busqueda() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchRef = useRef(null);
    const resultsRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Función de búsqueda mejorada
    const searchContent = (searchQuery) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        const queryLower = searchQuery.toLowerCase().trim();
        const words = queryLower.split(/\s+/).filter(w => w.length > 0);
        const matches = [];

        Object.entries(searchIndex).forEach(([route, data]) => {
            data.sections.forEach((section, sectionIndex) => {
                const textLower = section.text.toLowerCase();
                const contextLower = (section.context || '').toLowerCase();
                const titleLower = data.title.toLowerCase();
                
                // Buscar si todas las palabras están presentes
                const allWordsMatch = words.every(word => 
                    textLower.includes(word) || 
                    contextLower.includes(word) || 
                    titleLower.includes(word)
                );

                if (allWordsMatch) {
                    // Calcular relevancia (más palabras = más relevante)
                    let score = 0;
                    words.forEach(word => {
                        if (titleLower.includes(word)) score += 3;
                        if (textLower.includes(word)) score += 2;
                        if (contextLower.includes(word)) score += 1;
                    });

                    matches.push({
                        route,
                        title: data.title,
                        sectionId: section.id,
                        text: section.text,
                        context: section.context,
                        matchText: findMatchText(section.text, queryLower),
                        score
                    });
                }
            });
        });

        // Ordenar por relevancia
        matches.sort((a, b) => b.score - a.score);
        
        // Limitar a 10 resultados
        setResults(matches.slice(0, 10));
    };

    // Encuentra el texto que coincide con la búsqueda
    const findMatchText = (text, query) => {
        const index = text.toLowerCase().indexOf(query);
        if (index === -1) {
            // Si no encuentra coincidencia exacta, devolver primeros 100 caracteres
            return text.substring(0, 100).replace(/\n/g, ' ').trim();
        }
        const start = Math.max(0, index - 40);
        const end = Math.min(text.length, index + query.length + 40);
        return '...' + text.substring(start, end).replace(/\n/g, ' ').trim() + '...';
    };

    useEffect(() => {
        searchContent(query);
    }, [query]);

    // Manejar navegación y resaltado
    const handleResultClick = (result) => {
        setIsOpen(false);
        const searchQuery = query;
        setQuery('');
        setResults([]);
        
        // Si ya estamos en esa ruta, solo hacer scroll y resaltar
        if (location.pathname === result.route) {
            setTimeout(() => {
                highlightAndScroll(result.sectionId, result.text, searchQuery);
            }, 100);
        } else {
            // Navegar a la ruta
            navigate(result.route);
            
            // Esperar a que la página cargue y luego resaltar
            setTimeout(() => {
                highlightAndScroll(result.sectionId, result.text, searchQuery);
            }, 800);
        }
    };

    const highlightAndScroll = (sectionId, text, searchQuery) => {
        // Limpiar highlights anteriores
        clearHighlights();

        // Si tenemos un ID, buscar por ID primero
        if (sectionId) {
            const elementById = document.getElementById(sectionId);
            if (elementById) {
                elementById.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    highlightTextInPage(searchQuery);
                }, 300);
                return;
            }
        }

        // Buscar por texto en toda la página
        const searchWords = searchQuery.toLowerCase().split(/\s+/).filter(w => w.length > 0);
        const allTextElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, span, div');

        for (let element of allTextElements) {
            const elementText = element.textContent.toLowerCase();
            const matches = searchWords.some(word => elementText.includes(word));
            
            if (matches) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    highlightTextInPage(searchQuery);
                }, 300);
                break;
            }
        }
    };

    const highlightTextInPage = (searchQuery) => {
        clearHighlights();

        const searchWords = searchQuery.toLowerCase().split(/\s+/).filter(w => w.length > 2);
        if (searchWords.length === 0) return;

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (node) => {
                    // Ignorar scripts y estilos
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    const tagName = parent.tagName.toLowerCase();
                    if (tagName === 'script' || tagName === 'style') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            let hasMatch = false;
            let highlightedText = text;

            searchWords.forEach(word => {
                const regex = new RegExp(`(${escapeRegExp(word)})`, 'gi');
                if (regex.test(highlightedText)) {
                    hasMatch = true;
                    highlightedText = highlightedText.replace(
                        regex, 
                        '<mark class="search-highlight bg-yellow-400 text-gray-900 px-1 rounded font-semibold">$1</mark>'
                    );
                }
            });

            if (hasMatch) {
                const wrapper = document.createElement('span');
                wrapper.innerHTML = highlightedText;
                textNode.parentNode.replaceChild(wrapper, textNode);
            }
        });

        // Remover el highlight después de 5 segundos
        setTimeout(() => {
            clearHighlights();
        }, 5000);
    };

    const clearHighlights = () => {
        document.querySelectorAll('.search-highlight').forEach(el => {
            const parent = el.parentNode;
            if (parent) {
                const textNode = document.createTextNode(el.textContent);
                parent.replaceChild(textNode, el);
                parent.normalize();
            }
        });
    };

    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    // Manejar teclado
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            setQuery('');
            clearHighlights();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : prev);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
            e.preventDefault();
            handleResultClick(results[selectedIndex]);
        }
    };

    // Cerrar al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Scroll del resultado seleccionado
    useEffect(() => {
        if (selectedIndex >= 0 && resultsRef.current) {
            const selectedElement = resultsRef.current.children[selectedIndex];
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [selectedIndex]);

    // Limpiar highlights cuando cambia la ubicación
    useEffect(() => {
        return () => {
            clearHighlights();
        };
    }, [location.pathname]);

    return (
        <div className="relative" ref={searchRef}>
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                        setSelectedIndex(-1);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Buscar en notas..."
                    className="
                        bg-gray-800 text-gray-200 placeholder-gray-500
                        border border-gray-600 rounded-md
                        px-4 py-2 pl-10 pr-10
                        focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                        w-64 text-sm
                        transition-all
                    "
                />
                <IconSearch 
                    size="1rem"
                    className="absolute left-3 text-gray-400 pointer-events-none"
                />
                {query && (
                    <button
                        onClick={() => {
                            setQuery('');
                            setResults([]);
                            setIsOpen(false);
                            clearHighlights();
                        }}
                        className="absolute right-3 text-gray-400 hover:text-gray-200 transition-colors"
                        type="button"
                    >
                        <IconTimes size="1rem" />
                    </button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <div 
                    ref={resultsRef}
                    className="
                        absolute top-full left-0 mt-2
                        bg-gray-800 border border-gray-700 rounded-md
                        shadow-xl z-50
                        max-h-96 overflow-y-auto
                        w-96
                    "
                >
                    {results.map((result, index) => (
                        <div
                            key={`${result.route}-${result.sectionId}-${index}`}
                            onClick={() => handleResultClick(result)}
                            className={`
                                p-3 border-b border-gray-700 cursor-pointer
                                hover:bg-gray-700 transition-colors
                                ${selectedIndex === index ? 'bg-gray-700 border-l-4 border-l-blue-500' : ''}
                            `}
                        >
                            <div className="text-blue-400 font-semibold text-sm flex items-center gap-2">
                                <span>{result.title}</span>
                                {result.score > 0 && (
                                    <span className="text-xs text-gray-500">({result.score})</span>
                                )}
                            </div>
                            <div className="text-gray-500 text-xs mt-1 font-mono">
                                {result.route}
                            </div>
                            {result.matchText && (
                                <div className="text-gray-300 text-xs mt-2 line-clamp-2">
                                    {result.matchText}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {isOpen && query && results.length === 0 && (
                <div className="
                    absolute top-full left-0 mt-2
                    bg-gray-800 border border-gray-700 rounded-md
                    shadow-xl z-50 p-4 w-96
                ">
                    <div className="text-gray-400 text-sm text-center">
                        No se encontraron resultados para "<span className="text-gray-300 font-semibold">{query}</span>"
                    </div>
                </div>
            )}
        </div>
    );
}

export default Busqueda;