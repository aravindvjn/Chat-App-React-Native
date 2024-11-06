import React, { useContext, useEffect, useState } from "react";
import api from "../../Global/Services/services";
import { UserContext } from "../../Global/Context/Context";
import RemoveOrMessage from "./RemoveOrMessage";
import AddFriend from "./AddFriend";
import AcceptOrReject from "./AcceptOrReject";

const Operations = ({ id,navigation }) => {
  const [status, setStatus] = useState({ status: "Loading", payload: "" });
  const [refresh, setRefresh] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await api.get(`/friends/friend-status/${id}`);
        console.log(response.data)
        setStatus({
          status: response.data.status,
          payload: response.data.payload,
        });
      } catch (err) {
        console.log("Error in fetching Status");
      }
    };
    fetchStatus();
  }, [refresh]);
  if (user?.user_id === id) return null;
  if (status.status === "Friend") return <RemoveOrMessage id={id} setRefresh={setRefresh} navigation={navigation} />;
  if (status.status === "Requested") return <AddFriend status="Requested" id={id} setRefresh={setRefresh}/>;
  if (status.status === "Request")
    return <AcceptOrReject setRefresh={setRefresh} id={id} req_id={status?.payload} />;
  if (status.status === "Stranger") return <AddFriend id={id} setRefresh={setRefresh}/>;
  return null;
};

export default Operations;
