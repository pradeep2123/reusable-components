import React, { useState , useEffect} from 'react';
// import { Table, Radio, Divider ,Row} from 'antd';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
    Grid,
    Typography,
  } from "@material-ui/core";
  
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {Filter} from "./filter"

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      // marginTop: theme.spacing(3),
      // height: "calc(100vh - 315px)",
      height: "calc(100vh - 124px)",
      overflow: "auto"
    },
    dialog: {
      width: 500
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paperDuplicate: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    tableTitle: {
      fontWeight: 600,
      paddingLeft: 8
    },
    demo1: {
      backgroundColor: theme.palette.background.paper
    }, // ant
    demo2: {
      backgroundColor: "#2e1534"
    },
    rootant: {
      flexGrow: 1
    },
    tBody: {
      padding: 8,
      paddingLeft: 16,
      alignItems: "center"
    },
    padding: {
      padding: theme.spacing(3)
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    noData: {
      width: "80%",
      paddingTop: "8px",
      position: "fixed",
      fontWeight: "bold"
    },
    pendingInfo: {
      width: "80%",
      paddingTop: "32px",
      position: "fixed",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center"
    },
    infoIcon: {
      paddingTop: "-2px"
    },
    table: {
      minWidth: 750
    },
    remarks: {
      width: 180
    },
  
    tableWrapper: {
      overflowX: "auto"
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    headstiky: {
      // position: "sticky",
      top: 0,
  
      padding: 8,
      backgroundColor: "#f5f5f5",
      zIndex: 1
    }
  }));
  
  
export const ReactTable  = props => {
    const classes = useStyles();
    const [state,setState] = useState({
        data: [
            {
              key: '1',
              name: 'John Brown',
              screen_name: "Pradeep",
              followers_count: '11',
              following_count: '12',
              location: 'New York No. 1 Lake Park',
              verified: 'true',

            },
            {
                key: '2',
                name: 'mukundan',
                screen_name: "Pradeep",
                followers_count: '11',
                following_count: '12',
                location: 'New York No. 1 Lake Park',
                verified: 'true',
  
            },
            {
                key: '3',
                name: 'jac sparow',
                screen_name: "Pirates",
                followers_count: '11',
                following_count: '12',
                location: 'New York No. 1 Lake Park',
                verified: 'true',
  
            },
            {
                key: '4',
                name: 'Johnn ',
                screen_name: "sins",
                followers_count: '11',
                following_count: '12',
                location: 'New York No. 1 Lake Park',
                verified: 'true',
  
            },
            {
                key: '5',
                name: 'venkant',
                screen_name: "malu",
                followers_count: '11',
                following_count: '12',
                location: 'New York No. 1 Lake Park',
                verified: 'true',
  
            },
        ],
        filters:[{
            type:"Where",
            input:"followers_count",
            conditions:"<=",
            value:"2"
        }]         
    })
    const columns = [
        {
            title: 'Id',
            dataIndex: 'Id'
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Screen Name',
          dataIndex: 'screen_name'
        },
        {
          title: 'Followers Count',
          dataIndex: 'followers_count'
        },
        {
            title: 'Following Count',
            dataIndex: 'following_count'
        },
        {
            title: 'Location',
            dataIndex: 'location'
        },
        {
            title: 'Verified',
            dataIndex: 'verified'
        }
    ];

    const handleActions = (data,type,index) => {
        state.filters[index][type] =data

        if( type === "delete") {
          delete state.filters[index];
          var filtered = state.filters.filter(function (el) {
            return el != null && el !== undefined;
          });
        }
        setState({
            ...state
        })
        getData()
    }

    const getData = ()=> {
      let conditions = ""; let type = ""; let val_type ; let val_conditions;
      state.filters.map((k,i)=>{
        type = k["type"] === "Or" ? "||" : "&&"
        val_type = state.filters.length-1 === i ? "" : type

        val_conditions = k["conditions"] === ".includes" ? `.includes(${k["value"]})` :k["input"] + k["conditions"] + k["value"];

        conditions = conditions +  val_conditions + val_type
      })

      if (conditions) {
        // have to call data.
      }
    }

    const addFilter = ()=>{
      let filter_data ={
        type:"Or",
        input:"followers_count",
        conditions:"<=",
        value:"2"
    }
      state.filters.push(filter_data)
      console.log(state.filters,"a")
      setState({
        ...state
      });

      getData()
    }
    var conditions = ["<","<=",">=","===","!==",">",".includes"];

    var types = ["And","Where","Or"];

    useEffect(()=>{
      getData()
    },[])
      
    return (
        <div>
            {/* For Ant we have used  */}
            {/* <Table columns={columns}  dataSource={state.data && state.data.length>0?state.data:""}  pagination={false}
             /> */}

            {/* For material ui we are using */}
            <Grid container>
                <Filter state={state.filters} addFilter={addFilter}types={types} inputs={columns} conditions={conditions}  actions={handleActions}/>
                <Paper className={classes.root} >
                    <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {columns && columns.map((k,i)=>
                        <TableCell align="center" className={classes.headstiky}>
                        <Typography variant={"button"} className={classes.tableTitle}>
                            {k["title"]}
                        </Typography>
                        </TableCell>  
                        )}
                    </TableRow>
                    </TableHead>
                    <TableBody>

                        {state.data.length >0 && state.data.map((k,i)=>
                        <TableRow hover key={i}>

                            <TableCell align="center" className={classes.tBody}>
                            {i+1}
                            </TableCell>

                            <TableCell align="center" className={classes.tBody}>
                            {k["name"]}
                            </TableCell>

                            <TableCell align="center" className={classes.tBody}>
                            {k["screen_name"]}
                            </TableCell>

                            <TableCell align="center" className={classes.tBody}>
                            {k["followers_count"]}
                            </TableCell>

                            <TableCell align="center" className={classes.tBody}>
                            {k["following_count"]}
                            </TableCell>

                            <TableCell align="center" className={classes.tBody}>
                            {k["location"]}
                            </TableCell>

                            <TableCell align="center" className={classes.tBody}>
                            {k["verified"]}
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                    </Table>
                </Paper>
            </Grid>


        </div>
    )

}