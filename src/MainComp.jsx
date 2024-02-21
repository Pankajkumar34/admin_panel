import React from "react";
import Sidebar from './sideBar'
import Topbar from "./topBar";
import Button from '@mui/material/Button';
import CustomizedTables from "./components/tables";
import { Outlet, useNavigate } from "react-router-dom";
const MainComp = () => {
    // const router=useNavigate()

    return (
        <>
            <body id="page-top">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/* <!-- End of Sidebar --> */}
                    <Sidebar />
                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" class="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content" >

                            {/* <!-- Topbar --> */}

                            <Topbar />

                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div class="container" style={{width:"100%",marginLeft:"222px",marginRight:"100px",marginTop:"86px"}}>

                                {/* <!-- Page Heading --> */}
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                                </div>

                                {/* <!-- Content Row --> */}
                              <Outlet/>

                                {/* <!-- Content Row --> */}

                              

                                {/* <!-- Content Row --> */}
                                

                            </div>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <footer class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

                {/* <!-- Logout Modal--> */}
                <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a class="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}

export default MainComp;