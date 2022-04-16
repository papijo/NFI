import "./datatables.scss";
import { publicRequest } from "./../utils/requestMethods";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInfluencer,
  getInfluencers,
} from "./../redux/influencerApiCalls";

const CELL = styled.div`
  font-size: 25px;
`;

const ImageContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ImageText = styled.div`
  font-size: 25px;
`;

const InfluencerList = () => {
  const dispatch = useDispatch();
  const influencers = useSelector((state) => state.influencer.Influencers);

  useEffect(() => {
    getInfluencers(dispatch);
  }, [dispatch]);

  //Data Columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 350,
      renderCell: (params) => {
        return <CELL>{params.row._id}</CELL>;
      },
    },
    {
      field: "name",
      headerName: "Full Name",
      width: 350,
      editable: true,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <Image src={params.row.img1} alt="" />
            <ImageText> {params.row.name} </ImageText>
          </ImageContainer>
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/admin/dashboard/influencer/" + params.row._id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                deleteInfluencer(params.row._id, dispatch);
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/dashboard/new-influencer" className="link">
          Add New
        </Link>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={influencers}
          getRowId={(row) => row._id}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          sk={{ fontSize: "30" }}
        />
      </div>
    </div>
  );
};

export default InfluencerList;
