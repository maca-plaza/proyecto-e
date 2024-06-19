const Mail = () => {
            const [productos, setProductos] = useState(null);
            const { category } = useParams();
          
            useEffect(() => {
              const fetchProductos = async () => {
                try {
                  const response = await fetch(
                    "http://localhost:4200/products/categoria/" + category
                  );
                  if (response.ok) {
                    setProductos(await response.json());
                  }
                } catch (e) {
                  console.error(e);
                }
              };
          
              fetchProductos();
            }, [category]);
          
            if (contac) {
              return (
                <div>
                  <div className={styles["arrow-title"]}>
                    <a href="/">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/007/231/420/non_2x/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg"
                        alt="Back"
                        className={styles["back-arrow"]}
                      />
                    </a>
                    <h1 className={styles["category-title"]}>{category}</h1>
                  </div>
                  <div className={styles["products-container"]}>
                    {productos.map((p) => (
                      <div className={styles["product-wrapper"]} key={p.id}>
                        <img src={p.imageUrl} alt={p.name} />
                        <p className={styles["products-parrafo"]}>{p.name}</p>
                        <p className={styles["products-precio"]}>$ {p.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          
            return <div>404</div>;
          };
          
          export default Mail;