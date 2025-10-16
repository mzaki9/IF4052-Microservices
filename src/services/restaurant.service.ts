import { Restaurant } from "../models/restaurant.model";
import { Menu } from "../models/menu.model";
import { RestaurantRepository } from "../repositories/restaurant.repository";

export type PaginatedResult<T> = {
  total: number;
  page: number;
  limit: number;
  data: T[];
};

export type RestaurantQuery = {
  q?: string;
  page?: number;
  limit?: number;
};

export class RestaurantService {
  private repository: RestaurantRepository;

  constructor() {
    this.repository = new RestaurantRepository();
  }

  /**
   * Get paginated list of restaurants with optional search
   */
  getRestaurants(query: RestaurantQuery): PaginatedResult<Restaurant> {
    const { q = "", page = 1, limit = 10 } = query;

    // Ensure valid pagination params
    const validPage = Math.max(1, page);
    const validLimit = Math.max(1, Math.min(100, limit)); // max 100 items per page

    // Get filtered results
    const filtered = q ? this.repository.search(q) : this.repository.findAll();

    // Paginate
    const total = filtered.length;
    const start = (validPage - 1) * validLimit;
    const data = filtered.slice(start, start + validLimit);

    return {
      total,
      page: validPage,
      limit: validLimit,
      data,
    };
  }

  /**
   * Get restaurant by ID
   */
  getRestaurantById(id: string): Restaurant | null {
    const restaurant = this.repository.findById(id);
    return restaurant || null;
  }

  /**
   * Get menus by restaurant ID
   */
  getMenusByRestaurantId(restaurantId: string): Menu[] {
    return this.repository.findMenusByRestaurantId(restaurantId);
  }
}
