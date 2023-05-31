

export default function reorganizeByCategory(products) {
    const [ProductArray] = products;
    const categorizedProducts = [];
  
    for (const product of ProductArray) {
      const { id_category, category_name } = product;
  
      // Buscar la categoría en el array clasificado
      const existingCategory = categorizedProducts.find(
        (category) => category.category_name === category_name
      );
  
      if (existingCategory) {
        existingCategory.products.push(product);
      } else {
        // Crear una nueva categoría
        categorizedProducts.push({
          category_name,
          products: [product],
        });
      }
    }
    
    return categorizedProducts;
  }


/* export default function reorganizeByCategory(products) {
    const [ProductArray] = products
    const categorizedProducts = {};

    for (const product of ProductArray) {
      const { id_category, category_name } = product;
      if (!categorizedProducts[id_category]) {
        categorizedProducts[id_category] = {
          category_name,
          products: [],
        };
      }
      categorizedProducts[id_category].products.push(product);
    }
    console.log(categorizedProducts)
    return categorizedProducts;
  }
  
   */