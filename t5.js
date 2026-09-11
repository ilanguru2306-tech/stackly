const PRODUCTS_API = "https://fakestoreapi.com/products";
const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";


/* TASK 1 */

function task1() {
  fetch(PRODUCTS_API)
    .then(response => response.json())
    .then(products => {
      console.log("--- Task 1 ---");

      products.forEach(p => {
        console.log(`${p.title} | $${p.price} | ${p.category}`);
      });

      const titleAndPrice = products.map(p => ({ title: p.title, price: p.price }));
      console.log("Title + Price only:", titleAndPrice);

      const expensive = products.filter(p => p.price > 100);
      console.log("Above $100:", expensive);

      const firstElectronic = products.find(p => p.category === "electronics");
      console.log("First electronics product:", firstElectronic);

      const total = products.reduce((sum, p) => sum + p.price, 0);
      console.log("Total price:", total.toFixed(2));

      const sortedHighToLow = [...products].sort((a, b) => b.price - a.price);
      console.log("Sorted high->low:", sortedHighToLow.map(p => p.title));
    })
    .catch(error => {
      console.error("Error fetching products:", error.message);
    })
    .finally(() => {
      console.log("Task 1 request completed.");
    });
}


/*TASK 2 */

function countByCategory(products, category) {
  return products.filter(p => p.category === category).length;
}

function task2() {
  fetch(PRODUCTS_API)
    .then(response => response.json())
    .then(products => {
      const categories = [...new Set(products.map(p => p.category))];
      const prices = products.map(p => p.price);

      const highest = Math.max(...prices).toFixed(2);
      const lowest = Math.min(...prices).toFixed(2);
      const average = (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2);

      console.log(`===== PRODUCT DASHBOARD =====\n`);
      console.log(`Total Products: ${products.length}\n`);
      categories.forEach(cat => {
        console.log(`${cat}: ${countByCategory(products, cat)}`);
      });
      console.log(`\nHighest Price: $${highest}`);
      console.log(`Lowest Price: $${lowest}`);
      console.log(`Average Price: $${average}`);
    })
    .catch(error => console.error("Error:", error.message));
}


/*TASK 3 */

async function task3() {
  try {
    console.log("--- Task 3 ---");

    const usersRes = await fetch(USERS_API);
    const users = await usersRes.json();

    console.log("All user names:", users.map(u => u.name));

    users.forEach(u => console.log(`${u.name} - ${u.email}`));

    const user5 = users.find(u => u.id === 5);
    console.log("User with ID 5:", user5);

    const cityToFind = "Gwenborough"; // change to any city present in the data
    const usersInCity = users.filter(u => u.address.city === cityToFind);
    console.log(`Users from ${cityToFind}:`, usersInCity.map(u => u.name));

    const postsRes = await fetch(POSTS_API);
    const posts = await postsRes.json();

    const postsByUser1 = posts.filter(p => p.userId === 1);
    console.log("Posts by user ID 1:", postsByUser1);
    console.log("Count of posts by user ID 1:", postsByUser1.length);

    const longTitlePost = posts.find(p => p.title.length > 50);
    console.log("First post with title > 50 chars:", longTitlePost);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Task 3 request completed.");
  }
}


/*TASK 4 */

function task4() {
  // Hardcoded for testing in Node — replace with prompt() in a browser:
  const category = "electronics";
  const maxPrice = 500;

  fetch(PRODUCTS_API)
    .then(response => response.json())
    .then(products => {
      const results = products.filter(
        p => p.category === category && p.price <= maxPrice
      );
      console.log(`Category = ${category}`);
      console.log(`Price <= ${maxPrice}`);
      console.log("Matching products:", results);
    })
    .catch(error => console.error("Error:", error.message));
}


/* TASK 5 */

function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function getDiscountPercent(total) {
  if (total > 200) return 20;
  if (total > 100) return 10;
  return 0;
}

function task5() {
  fetch(PRODUCTS_API)
    .then(response => response.json())
    .then(products => {
      console.log("Available products:");
      products.forEach(p => console.log(`ID ${p.id}: ${p.title} - $${p.price}`));

      // Simulate the student selecting products by ID
      const selectedIds = [1, 2];
      const cart = products.filter(p => selectedIds.includes(p.id));

      console.log("\n===== CART =====");
      cart.forEach((item, index) => {
        console.log(`Product ${index + 1}: ${item.title}`);
        console.log(`Price: $${item.price}`);
      });

      const total = calculateCartTotal(cart);
      const discountPct = getDiscountPercent(total);
      const finalAmount = total - (total * discountPct) / 100;

      console.log(`\nTotal: $${total.toFixed(2)}`);
      console.log(`Discount: ${discountPct}%`);
      console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
    })
    .catch(error => console.error("Error:", error.message));
}


/*- TASK 6: */

function task6() {
  fetch(PRODUCTS_API)
    .then(response => response.json())
    .then(products => {
      console.log("========== PRODUCT REPORT ==========\n");
      console.log(`Total Products: ${products.length}\n`);

      products.forEach(p => console.log(`- ${p.title}`));

      const names = products.map(p => p.title);
      console.log("\nProduct Names:");
      names.forEach(n => console.log(`- ${n}`));

      const above100 = products.filter(p => p.price > 100);
      console.log("\nProducts Above $100:");
      above100.forEach(p => console.log(`- ${p.title}: $${p.price}`));

      const electronic = products.find(p => p.category === "electronics");
      console.log("\nElectronics Product:");
      console.log(electronic);

      const totalValue = products.reduce((sum, p) => sum + p.price, 0);
      console.log("\nTotal Product Value:");
      console.log(`$${totalValue.toFixed(2)}`);

      console.log("\nAny Product Above $500:");
      console.log(products.some(p => p.price > 500));

      console.log("\nAll Products Above $1:");
      console.log(products.every(p => p.price > 1));

      const sorted = [...products].sort((a, b) => b.price - a.price);
      console.log("\nHighest -> Lowest:");
      sorted.forEach(p => console.log(`- ${p.title}: $${p.price}`));
    })
    .catch(error => {
      console.error("Error fetching products:", error.message);
    })
    .finally(() => {
      console.log("\nTask 6 request completed.");
    });
}
