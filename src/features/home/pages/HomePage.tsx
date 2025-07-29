import ChooseDishes from '../components/ChooseDishes';
import Orders from '../components/Orders';

export default function HomePage() {
  return (
    <div className='flex h-full'>
      <ChooseDishes />
      <Orders />
    </div>
  );
}
