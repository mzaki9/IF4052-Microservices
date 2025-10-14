import { Hono } from 'hono'
import restaurantRoutes from './routes/restaurant.routes'

const app = new Hono()

// Health check
app.get('/', (c) => c.json({ message: 'Restaurant API is running', version: '1.0.0' }))

// Mount restaurant routes
app.route('/api/restaurants', restaurantRoutes)

export default app
