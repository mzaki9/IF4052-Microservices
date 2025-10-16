import { Restaurant } from '../models/restaurant.model'
import { Menu } from '../models/menu.model'

// Sample in-memory restaurant dataset
const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: "Warung Maju",
    cuisine: 'Indonesian',
    rating: 4.3,
    address: 'Jl. Merdeka 1, Bandung',
    is_open: true,
    delivery_time: 25,
  },
  {
    id: 'r2',
    name: "Sushi Bento",
    cuisine: 'Japanese',
    rating: 4.7,
    address: 'Jl. Sakura 10, Jakarta',
    is_open: false,
    delivery_time: 40,
  },
  {
    id: 'r3',
    name: "Pizza Roma",
    cuisine: 'Italian',
    rating: 4.5,
    address: 'Jl. Italia 7, Surabaya',
    is_open: true,
    delivery_time: 30,
  },
  {
    id: 'r4',
    name: "Nasi Goreng Express",
    cuisine: 'Indonesian',
    rating: 4.1,
    address: 'Jl. Raya 15, Bandung',
    is_open: true,
    delivery_time: 20,
  },
  {
    id: 'r5',
    name: "Burger King",
    cuisine: 'American',
    rating: 4.0,
    address: 'Jl. Sudirman 100, Jakarta',
    is_open: true,
    delivery_time: 35,
  },
]

// Sample in-memory menu dataset
const MENUS: Menu[] = [
  // Warung Maju (r1)
  { id: 'm1', restaurant_id: 'r1', name: 'Nasi Goreng Special', description: 'Fried rice with chicken and vegetables', price: 25000, category: 'Main Course', is_available: true },
  { id: 'm2', restaurant_id: 'r1', name: 'Mie Goreng', description: 'Fried noodles with seafood', price: 22000, category: 'Main Course', is_available: true },
  { id: 'm3', restaurant_id: 'r1', name: 'Sate Ayam', description: 'Grilled chicken skewers with peanut sauce', price: 30000, category: 'Main Course', is_available: true },
  { id: 'm4', restaurant_id: 'r1', name: 'Es Teh Manis', description: 'Sweet iced tea', price: 5000, category: 'Beverage', is_available: true },
  
  // Sushi Bento (r2)
  { id: 'm5', restaurant_id: 'r2', name: 'Salmon Sushi Set', description: '8 pieces of fresh salmon sushi', price: 85000, category: 'Main Course', is_available: true },
  { id: 'm6', restaurant_id: 'r2', name: 'Tempura Udon', description: 'Udon noodles with crispy tempura', price: 65000, category: 'Main Course', is_available: true },
  { id: 'm7', restaurant_id: 'r2', name: 'Chicken Teriyaki Bento', description: 'Bento box with teriyaki chicken', price: 55000, category: 'Main Course', is_available: true },
  { id: 'm8', restaurant_id: 'r2', name: 'Green Tea', description: 'Traditional Japanese green tea', price: 15000, category: 'Beverage', is_available: true },
  
  // Pizza Roma (r3)
  { id: 'm9', restaurant_id: 'r3', name: 'Margherita Pizza', description: 'Classic pizza with tomato and mozzarella', price: 75000, category: 'Main Course', is_available: true },
  { id: 'm10', restaurant_id: 'r3', name: 'Pepperoni Pizza', description: 'Pizza with pepperoni and cheese', price: 85000, category: 'Main Course', is_available: true },
  { id: 'm11', restaurant_id: 'r3', name: 'Carbonara Pasta', description: 'Creamy pasta with bacon', price: 60000, category: 'Main Course', is_available: true },
  { id: 'm12', restaurant_id: 'r3', name: 'Tiramisu', description: 'Italian coffee-flavored dessert', price: 35000, category: 'Dessert', is_available: true },
  
  // Nasi Goreng Express (r4)
  { id: 'm13', restaurant_id: 'r4', name: 'Nasi Goreng Kampung', description: 'Village-style fried rice', price: 20000, category: 'Main Course', is_available: true },
  { id: 'm14', restaurant_id: 'r4', name: 'Nasi Goreng Seafood', description: 'Fried rice with seafood mix', price: 28000, category: 'Main Course', is_available: true },
  { id: 'm15', restaurant_id: 'r4', name: 'Ayam Goreng Kremes', description: 'Crispy fried chicken', price: 25000, category: 'Main Course', is_available: true },
  
  // Burger King (r5)
  { id: 'm16', restaurant_id: 'r5', name: 'Whopper Burger', description: 'Flame-grilled beef burger', price: 45000, category: 'Main Course', is_available: true },
  { id: 'm17', restaurant_id: 'r5', name: 'Chicken Burger', description: 'Crispy chicken burger', price: 40000, category: 'Main Course', is_available: true },
  { id: 'm18', restaurant_id: 'r5', name: 'French Fries', description: 'Crispy golden fries', price: 15000, category: 'Side Dish', is_available: true },
  { id: 'm19', restaurant_id: 'r5', name: 'Cola', description: 'Cold soft drink', price: 10000, category: 'Beverage', is_available: true },
]

export class RestaurantRepository {
  /**
   * Get all restaurants
   */
  findAll(): Restaurant[] {
    return RESTAURANTS
  }

  /**
   * Search restaurants by query string (name or cuisine)
   */
  search(query: string): Restaurant[] {
    if (!query) return RESTAURANTS
    
    const lower = query.toLowerCase()
    return RESTAURANTS.filter(
      (r) =>
        r.name.toLowerCase().includes(lower) ||
        r.cuisine.toLowerCase().includes(lower)
    )
  }

  /**
   * Find restaurant by ID
   */
  findById(id: string): Restaurant | undefined {
    return RESTAURANTS.find((r) => r.id === id)
  }

  /**
   * Get total count
   */
  count(): number {
    return RESTAURANTS.length
  }

  /**
   * Get menus by restaurant ID
   */
  findMenusByRestaurantId(restaurantId: string): Menu[] {
    return MENUS.filter((m) => m.restaurant_id === restaurantId)
  }
}
