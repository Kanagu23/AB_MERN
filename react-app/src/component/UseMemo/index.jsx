import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 16",
    category: "Mobile",
    price: 75000
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "Mobile",
    price: 65000
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "Laptop",
    price: 95000
  },
  {
    id: 4,
    name: "Dell Inspiron",
    category: "Laptop",
    price: 70000
  },
  {
    id: 5,
    name: "Sony Headphones",
    category: "Accessories",
    price: 12000
  },
  {
    id: 6,
    name: "Apple Watch",
    category: "Accessories",
    price: 45000
  }
];

function UseMemoExample() {


  const [search, setSearch] = useState("");

  const [category, setCategory] =useState("All");

  const [sort, setSort] =useState("default");

  const filteredProducts = useMemo(() => {

    console.log("Filtering and sorting...");

    let result = products;

    // Search
    if (search.trim() !== "") {
      result = result.filter(product =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter(product =>
        product.category === category
      );
    }

    // Sorting
    if (sort === "lowToHigh") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "highToLow") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    return result;

  }, [search, category, sort]);

  const totalPrice = useMemo(() => {

    console.log("Calculating total...");

    return filteredProducts.reduce(
      (total, product) =>
        total + product.price,
      0
    );

  }, [filteredProducts]);

  return (
    <div style={{ padding: "30px" }}>

      <h1>Product Explorer</h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={e =>
          setSearch(e.target.value)
        }
      />

      <br />
      <br />

      {/* Category */}

      <select
        value={category}
        onChange={e =>
          setCategory(e.target.value)
        }
      >
        <option value="All">
          All
        </option>

        <option value="Mobile">
          Mobile
        </option>

        <option value="Laptop">
          Laptop
        </option>

        <option value="Accessories">
          Accessories
        </option>

      </select>

      <br />
      <br />

      {/* Sorting */}

      <select
        value={sort}
        onChange={e =>
          setSort(e.target.value)
        }
      >
        <option value="default">
          Default
        </option>

        <option value="lowToHigh">
          Price: Low → High
        </option>

        <option value="highToLow">
          Price: High → Low
        </option>

      </select>

      <hr />

      {/* Product count */}

      <h3>
        Products Found: {filteredProducts.length}
      </h3>

      {/* Product list */}

      {filteredProducts.length === 0 ? (

        <p>No products found.</p>

      ) : (

        filteredProducts.map(product => (

          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px"
            }}
          >

            <h3>
              {product.name}
            </h3>

            <p>
              Category: {product.category}
            </p>

            <p>
              Price: ₹
              {product.price.toLocaleString()}
            </p>

          </div>

        ))

      )}

      <hr />

      {/* Total */}

      <h2>
        Total: ₹
        {totalPrice.toLocaleString()}
      </h2>

    </div>
  );
}

export default UseMemoExample;