const Shop = () => {
    return (
        <>
        <div className="container py-3">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                    <span className="fs-4">스킬 상점</span>
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">초급</a>
                    <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">중급</a>
                    <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">고급</a>
                    <a className="py-2 link-body-emphasis text-decoration-none" href="#">문의</a>
                </nav>
                </div>

                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">스킬</h1>
                <p className="fs-5 text-body-secondary">원하시는 스킬을 장바구니에 담아 보내세요!.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">React</h4>
                    </div>
                    <div className="card-body">
                        {/* <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1> */}
                        <h1 className="card-title pricing-card-title">초급<small className="text-body-secondary fw-light">/고급</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>간단한 컴포넌트 생성</li>
                        <li>고객맞춤 라우터 연결</li>
                        <li>사이드바 설정</li>
                        <li>유지보수</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">장바구니</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">SpringBoot</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">초급<small className="text-body-secondary fw-light">/고급</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>클라이언트 요청 API 생성</li>
                        <li>Mapper 연결</li>
                        <li>간단 조회쿼리 작성</li>
                        <li>클라이언트에 데이터 전달</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">장바구니</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contact us</button>
                    </div>
                    </div>
                </div>
                </div>

                <h2 className="display-6 text-center mb-4">Compare plans</h2>

                <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                    <tr>
                        <th style={{width: "34%"}}></th>
                        <th style={{width: "22%"}}>Free</th>
                        <th style={{width: "22%"}}>Pro</th>
                        <th style={{width: "22%"}}>Enterprise</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" className="text-start">Public</th>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Private</th>
                        <td></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <th scope="row" className="text-start">Permissions</th>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Sharing</th>
                        <td></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Unlimited members</th>
                        <td></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Extra security</th>
                        <td></td>
                        <td></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default Shop;