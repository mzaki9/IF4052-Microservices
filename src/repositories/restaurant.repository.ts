import { Restaurant } from '../models/restaurant.model'

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
}
