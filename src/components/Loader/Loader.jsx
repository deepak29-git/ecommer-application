import { useAxios } from "../../Api-data/useAxios";
import loadingGif from "../../assets/loader.gif";

export const Loader = ({ center }) => {
  const { loader } = useAxios();

  return (
    <>
      {loader && (
        <div className={center === "center" ? "loading-gif" : "center"}>
          <div>
            <img src={loadingGif} alt="loading" />
          </div>
        </div>
      )}
    </>
  );
};
