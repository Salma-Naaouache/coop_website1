import React, { useEffect, useState } from 'react';
import { supabase } from "../supabaseClient";

interface Produit {
  id: number;
  nom: string;
  description: string | null;
  prix: number | null;
  image_url: string | null;
  quantité: string | null;
  categorie: string | null;
}

const OurProducts: React.FC = () => {
  const [productsByCategory, setProductsByCategory] = useState<Record<string, Produit[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string>('name');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('produits')
          .select('*')
          .order('categorie', { ascending: true })
          .order('nom', { ascending: true });

        if (error) throw error;

        if (!data || data.length === 0) {
          setProductsByCategory({});
          return;
        }

        const grouped = data.reduce((acc: Record<string, Produit[]>, produit) => {
          const category = produit.categorie || 'Non catégorisé';
          if (!acc[category]) acc[category] = [];
          acc[category].push(produit);
          return acc;
        }, {});

        setProductsByCategory(grouped);
        if (selectedCategory === 'all' && Object.keys(grouped).length > 0) {
          setSelectedCategory(Object.keys(grouped)[0]);
        }
      } catch (error) {
        console.error('Error:', error);
        if (error instanceof Error) {
          setError(`Erreur de chargement: ${error.message}`);
        } else {
          setError('Erreur de chargement inconnue');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get current products based on selection
  const getCurrentProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(productsByCategory).flat();
    }
    return productsByCategory[selectedCategory] || [];
  };

  // Sort products
  const sortProducts = (products: Produit[]) => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => (a.prix || 0) - (b.prix || 0));
      case 'price-high':
        return sorted.sort((a, b) => (b.prix || 0) - (a.prix || 0));
      case 'name':
      default:
        return sorted.sort((a, b) => a.nom.localeCompare(b.nom));
    }
  };

  const currentProducts = sortProducts(getCurrentProducts());
  const totalProducts = Object.values(productsByCategory).flat().length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
          <span className="text-gray-600">Chargement des produits...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-50 border border-red-200 rounded-lg text-red-700 m-8">
        <h3 className="font-semibold mb-2">Erreur</h3>
        <p className="text-sm mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle categories sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Nos Produits Bio</h1>
            </div>
            <div className="text-sm text-gray-500">
              {totalProducts} produits au total
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className={`${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block fixed lg:static inset-y-0 left-0 z-30 w-56 bg-white border-r border-gray-200 lg:border-none lg:bg-transparent p-4 lg:p-0`}>
            
            {/* Mobile overlay */}
            {sidebarOpen && (
              <div 
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}

            <div className="relative z-30 h-full lg:h-auto">
              {/* Close button for mobile */}
              <div className="lg:hidden flex justify-between items-center mb-6 px-4">
                <h2 className="text-lg font-semibold">Catégories</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close categories sidebar"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Categories */}
              <nav className="space-y-1 px-2 lg:px-0" aria-label="Product categories">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <div className="flex items-center justify-between">
                    <span>Tous les produits</span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {totalProducts}
                    </span>
                  </div>
                </button>

                {Object.entries(productsByCategory).map(([category, products]) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {products.length}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Breadcrumbs & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Produits</span>
                {selectedCategory !== 'all' && (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-900 font-medium">{selectedCategory}</span>
                  </>
                )}
              </div>

              {/* Sorting */}
              <div className="flex items-center space-x-3">
                <label htmlFor="sort" className="text-sm text-gray-600">Trier par:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Nom A-Z</option>
                  <option value="price-low">Prix: Bas à Haut</option>
                  <option value="price-high">Prix: Haut à Bas</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {currentProducts.map((produit) => (
                  <div 
                    key={produit.id}
                    className="bg-white rounded-md border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                  >
                    {/* Image container */}
                    <div className="w-full h-40 bg-gray-50 overflow-hidden flex items-center justify-center">
                      {produit.image_url ? (
                        <img 
                          src={produit.image_url}
                          alt={produit.nom}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling!.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`${produit.image_url ? 'hidden' : 'flex'} w-full h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50`}>
                        <div className="text-center text-gray-400">
                          <svg className="w-10 h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                          <span className="text-xs font-semibold">Image à venir</span>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-gray-900 text-base line-clamp-2 mb-2">
                        {produit.nom}
                      </h3>

                      {produit.prix !== null && (
                        <div className="text-blue-600 font-bold text-lg mb-1">
                          {produit.prix} MAD
                        </div>
                      )}

                      {produit.quantité && (
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block mb-3">
                          {produit.quantité}
                        </div>
                      )}

                      <button 
                        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 text-white py-2 rounded-md font-medium transition-colors"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <div className="max-w-sm mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Aucun produit dans cette catégorie</h3>
                  <p className="text-gray-500 text-sm">Sélectionnez une autre catégorie ou consultez tous les produits</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default OurProducts;
