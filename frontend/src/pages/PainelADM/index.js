import MenuAdm from '../../components/MenuAdm'
import MainAdm from '../../components/Mains/MainAdm'

import './style.css'

const PainelADM = () => {
    return (
        <>
            <div className="pageAdm">
                <MenuAdm />
                <MainAdm />
            </div>
        </>
    )
}

export default PainelADM