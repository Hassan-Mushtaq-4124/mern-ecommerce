const Categories = () => {
  const categories = [
    "Electronics",
    "Accessories",
    "Gaming",
    "Fashion",
    "Laptops",
  ];

  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <button key={index}>{cat}</button>
      ))}
    </div>
  );
};

export default Categories;