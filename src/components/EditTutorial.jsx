const EditTutorial = ({Setediteddescription,Seteditedtitle,editeddescription,editedtitle,editedid,editTutorial}) => {
  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
              <form onSubmit={(e) => {
                e.preventDefault();
                editTutorial({
                id: editedid,
                title: editedtitle,
                description: editeddescription,
              });
            }}>
            <div className="modal-body">
            <input
              type="text"
              className="form-control mb-3"
              id="title"
              value={editedtitle}
              placeholder="Enter your Title"
              onChange={(e) => Seteditedtitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              id="desc"
              value={editeddescription}
              placeholder="Enter your Description"
              onChange={(e) => Setediteddescription(e.target.value)}
              required
            />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
