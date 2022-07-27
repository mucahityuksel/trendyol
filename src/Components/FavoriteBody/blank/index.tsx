import { BsFillHeartFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import "./style.scss";

function BlankFavorites() {

    const history = useHistory();
    return (
        <div className='blank-favorites-component'>
            <div className='blank-favorites-container'>
                <div className='blank-icon'>
                    <BsFillHeartFill className='blank-like-icon'></BsFillHeartFill>
                </div>
                <div className='blank-info'>Favoriler Listeniz Henüz Boş</div>
                <div className='blank-desc'>Favori listenizde ürün bulunamadı. “Alışverişe Başla” butonuna tıklayarak dilediğiniz ürünleri favoriye ekleyebilirsiniz.</div>
                <div className='blank-start-shop'>
                    <button className='start-shop-btn'
                        onClick={() => history.push("/")}
                    >
                        Alışverişe Başla
                    </button>
                </div>


            </div>
        </div>
    )
}

export default BlankFavorites
