import { Hono } from 'hono'
import { RestaurantController } from '../controllers/restaurant.controller'

const restaurantRoutes = new Hono()
const controller = new RestaurantController()

// GET /api/restaurants - list with search and pagination
restaurantRoutes.get('/', controller.getRestaurants)

// GET /api/restaurants/:id - get by ID
restaurantRoutes.get('/:id', controller.getRestaurantById)

export default restaurantRoutes
