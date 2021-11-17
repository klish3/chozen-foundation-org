const HomeGrid = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-5">

            <div className="card shadow-2xl lg:card-side bg-primary text-primary-content">
                <div className="card-body text-center">
                    <small>OUR</small>
                    <div className="divide-y">
                        <h2 className="card-title">VALUES</h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                    </div>
                </div>
            </div>

            <div className="card shadow-2xl lg:card-side bg-success text-primary-content">

                <div className="card-body text-center">
                    <small>OUR</small>
                    <div className="divide-y">
                        <h2 className="card-title">VALUES</h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                    </div>
                </div>
            </div>

            <div className="card shadow-2xl lg:card-side bg-warning text-primary-content">

                <div className="card-body text-center">
                    <small>OUR</small>
                    <div className="divide-y">
                        <h2 className="card-title">VALUES</h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeGrid;