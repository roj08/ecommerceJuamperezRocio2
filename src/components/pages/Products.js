import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer.jsx';

const Products = () => {
  let { id } = useParams();
  return (
    <main>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default Products;