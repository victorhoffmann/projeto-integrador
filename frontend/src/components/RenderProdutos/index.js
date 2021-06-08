import RenderFotos from '../Categoria_ID/RenderFotos'

const RenderProdutos = ({ produtos }) => {
    return (
        <>
            { produtos.map((produto, index) => (
                <article className="card">
                    <h3 className="card__title">{produto.nome}</h3>
                    <img className="card__img" src={RenderFotos(produto.categoria_id)} alt="Headsets" />
                    <span className="card__price">{produto.preco}</span>
                    <p className="card__description">{produto.descricao}</p>
                    <button type="button" className="card__button btn btn-outline-success">
                        Adicionar ao carrinho{" "}
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </article>
            ))}
        </>
    )
}

export default RenderProdutos