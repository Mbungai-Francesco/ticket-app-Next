interface Params {
  params :{
    id : string
  }
}

const TicketPage = ({ params } : Params) => {
  return (
    <div>TicketPage {params.id}</div>
  );
};

export default TicketPage