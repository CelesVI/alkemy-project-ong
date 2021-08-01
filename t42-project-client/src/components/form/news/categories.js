import { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';

const ListaCategorias = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await makeGET(ENDPOINT_CATEGORY);
      setCategories(data.categories);
    }
  fetchCategories();
  }, []);
  return(categories);
}

export default ListaCategorias;

/*const listCategories = [
  'Noticias',
  'Importante',
  'Urgente',
  'Ocio',
  'Entretenimiento',
  'Detalles',
  'Example'
];

export default listCategories;*/
