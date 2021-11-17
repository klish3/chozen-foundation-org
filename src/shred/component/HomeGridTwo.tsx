const HomeGridTwo = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-5">

            <div className="card shadow-2xl lg:card-side bg-primary text-primary-content">
                <div className="card-body">
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">
                            More info

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card shadow-2xl lg:card-side bg-success text-primary-content">
                <div className="card-body">
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-success">
                            More info

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card shadow-2xl lg:card-side bg-warning text-primary-content">
                <div className="card-body">
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-warning">
                            More info

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeGridTwo;