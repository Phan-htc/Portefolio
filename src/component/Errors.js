export const DefaultBoundaryError = () => {
    return (
      <div className="flex justify-center items-center w-full h-full font-bold text-xl text-center">
        Oops...<br />An error occured, please reload the page.
      </div>
    );
  }
  
  export const DefaultFetchingError = () => {
    return (
      <div className="flex justify-center items-center w-full h-full font-bold text-xl text-center">
        Oops...<br />An error occured, check your internet connection and try again.
        <img src="../image/travolta.gif" alt="" />
      </div>
    );
  }
  