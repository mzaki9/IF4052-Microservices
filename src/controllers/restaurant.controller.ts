import { Context } from 'hono'
import { RestaurantService } from '../services/restaurant.service'

export class RestaurantController {
  private service: RestaurantService

  constructor() {
    this.service = new RestaurantService()
  }

  /**
   * GET /api/restaurants
   * Query params: q (search), page, limit
   */
  getRestaurants = (c: Context) => {
    const q = c.req.query('q') || ''
    const page = Number(c.req.query('page') || 1)
    const limit = Number(c.req.query('limit') || 10)

    const result = this.service.getRestaurants({ q, page, limit })
    const mapped = {
      ...result,
      data: result.data.map((r) => ({ label: r.name, value: r.id })),
    }

    return c.json(mapped)
  }

  /**
   * GET /api/restaurants/:id
   */
  getRestaurantById = (c: Context) => {
    const id = c.req.param('id')
    const restaurant = this.service.getRestaurantById(id)

    if (!restaurant) {
      return c.json({ error: 'Restaurant not found' }, 404)
    }

    return c.json({ data: restaurant })
  }
}
