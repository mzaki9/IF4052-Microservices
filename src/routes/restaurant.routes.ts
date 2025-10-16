import { Hono } from "hono";
import { RestaurantController } from "../controllers/restaurant.controller";

const restaurantRoutes = new Hono();
const controller = new RestaurantController();

// GET /api/restaurants - list with search and pagination
restaurantRoutes.get("/", controller.getRestaurants);

// GET /api/restaurants/:id - get by ID
restaurantRoutes.get("/:id", controller.getRestaurantById);

// GET /api/restaurants/:id/menus - get menus by restaurant ID
restaurantRoutes.get("/:id/menus", controller.getMenusByRestaurantId);

export default restaurantRoutes;
