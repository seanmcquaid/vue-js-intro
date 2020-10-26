import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
  routes,
});

export default router;

// SUPER similar to react router
// this.$route
// params, push
// router-link is equiv to Link comp in React
// router-view = Router wrapper in React
