import Container from "../components/Container/Container";
const SendBatchList: React.FC = () => {
  const handleNormalizeApi = () => {};
  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className="mt-8 bg-bg-navbar p-4 flex flex-col rounded-2xl  shadow-xl">
          <label>Enter first names seperated by ;</label>
          <textarea
            className="mt-2 border p-2"
            placeholder="Eg:- Milan; Rahul; Lakshay;"
            // rows={10}
          ></textarea>
          <button
            className="mt-3 ml-auto bg-green-400 text-white p-2 rounded hover:bg-green-400/80 cursor-pointer"
            onClick={handleNormalizeApi}
          >
            Send
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SendBatchList;
