import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../service/productsService";

export default function List(){
    const dispatch = useDispatch()
    const products = useSelector(state => {
        console.log(state.products.products)
        return state.products.products
    })
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return(

        <div className="row">
            {products.map(item => (
                <div className="col-lg-4 col-md-6 wow fadeInUp items">
                    <div className="room-item shadow rounded overflow-hidden">
                        <div className="position-relative" style={{marginLeft:"55px"}}>
                            <img className="img-fluid" src={item.image} alt=""/>
                            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$<span>{item.price}</span>/Tháng</small>
                        </div>
                        <div className="p-4 mt-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0" style={{fontSize: "1.5rem"}} style={{marginLeft:"80px"}}>Tên nhà: {item.name}</h5>
                                <div className="ps-2">
                                    <small className="fa fa-star text-primary"><span id="hiddenSpan">{item.id}</span></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2 " id="diachi1"></i><span>{item.address}</span></small>
                                <small><i className="fa fa-wifi text-primary me-2"></i><span>DT {item.acreage} m2</span></small>
                            </div>
                            <p className="text-body mb-3">{item.des}</p>
                            <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => {}}>Xem chi tiết</button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
// <div className='col-12'>
//     {products.map(item=>(
//         <h6>{item.name},{item.address},{item.acreage},{item.price},{item.des},{item.image}</h6>
//     ))}
// </div>