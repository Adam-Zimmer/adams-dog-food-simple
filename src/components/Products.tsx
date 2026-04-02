import { trpc } from '../utils/trpc';

export function Products() {
  const { data: foodItems, isLoading, error } = trpc.foodItems.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-600 border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Loading our premium products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Our Premium Products
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Carefully crafted nutrition for every stage of your dog's life
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {foodItems?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                <img
                  src={item.imageUrl || ''}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
