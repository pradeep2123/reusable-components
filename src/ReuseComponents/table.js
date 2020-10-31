import React, { useState, useEffect } from "react";
// import { Table, Radio, Divider ,Row} from 'antd';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  MenuItem,
  Typography,
  Button,
  TextField
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import { Filter } from "./filter";

const useStyles = makeStyles((theme) => ({
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

export const ReactTable = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    data: [
      {
        key: "1",
        name: "John Brown",
        screen_name: "Pradeep",
        followers_count: "11",
        following_count: "12",
        location: "New York No. 1 Lake Park",
        verified: "true"
      },
      {
        key: "2",
        name: "mukundan",
        screen_name: "Pradeep",
        followers_count: "11",
        following_count: "12",
        location: "New York No. 1 Lake Park",
        verified: "true"
      },
      {
        key: "3",
        name: "jac sparow",
        screen_name: "Pirates",
        followers_count: "11",
        following_count: "12",
        location: "New York No. 1 Lake Park",
        verified: "true"
      },
      {
        key: "4",
        name: "Johnn ",
        screen_name: "sins",
        followers_count: "11",
        following_count: "12",
        location: "New York No. 1 Lake Park",
        verified: "true"
      },
      {
        key: "5",
        name: "venkant",
        screen_name: "malu",
        followers_count: "11",
        following_count: "12",
        location: "New York No. 1 Lake Park",
        verified: "true"
      }
    ],
    filters: [
      {
        type: "Where",
        input: "followers_count",
        conditions: "<=",
        value: "2"
      }
    ]
  });
  const columns = [
    {
      title: "Id",
      dataIndex: "Id"
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Screen Name",
      dataIndex: "screen_name"
    },
    {
      title: "Followers Count",
      dataIndex: "followers_count"
    },
    {
      title: "Following Count",
      dataIndex: "following_count"
    },
    {
      title: "Location",
      dataIndex: "location"
    },
    {
      title: "Verified",
      dataIndex: "verified"
    }
  ];

  const handleActions = (data, type, index) => {
    state.filters[index][type] = data;

    if (type === "delete") {
      delete state.filters[index];
      var filtered = state.filters.filter(function (el) {
        return el != null && el !== undefined;
      });
    }
    setState({
      ...state
    });
    getData();
  };

  const getData = () => {
    let conditions = "";
    let type = "";
    let val_type;
    let val_conditions;
    state.filters.map((k, i) => {
      type = k["type"] === "Or" ? "||" : "&&";
      val_type = state.filters.length - 1 === i ? "" : type;

      val_conditions =
        k["conditions"] === ".includes"
          ? `.includes(${k["value"]})`
          : k["input"] + k["conditions"] + k["value"];

      conditions = conditions + val_conditions + val_type;
    });

    if (conditions) {
      // have to call data.
    }
  };

  const addFilter = () => {
    let filter_data = {
      type: "Or",
      input: "followers_count",
      conditions: "<=",
      value: "2"
    };
    state.filters.push(filter_data);
    console.log(state.filters, "a");
    setState({
      ...state
    });

    getData();
  };
  var conditions = ["<", "<=", ">=", "===", "!==", ">", ".includes"];

  var types = ["And", "Where", "Or"];

  useEffect(() => {
    getData();
  }, []);

  //call question-1
  const [N, setN] = React.useState(5);
  const customPrint = (n, message) => {
    let val = n - 1;
    console.log(n, message);
    if (val) {
      setN(val);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (temp) => {
    setOpen(temp);
  };
  const handleNewOpen = (temp) => {
    setOpenNew(temp);
  };

  useEffect(() => {
    customPrint(N, "Hello,World");
  }, [N]);

  //call question-2
  const [notify, setNotify] = React.useState({
    notifications: [
      { message: "Lorem", read: true },
      { message: "Ipsum", read: true },
      { message: "Dolor", read: true },
      { message: "Sit", read: false },
      { message: "Amet", read: true }
    ],
    allRead: true,
    notify_length: 0,
    N: 0
  });
  const notifications = (n) => {
    let val = n - 1;
    console.log(n, "---------");
    if (n || n - 1 === 0) {
      notify.notifications[n - 1].read = false;
      console.log(notify.notifications[val], "ppppppppp");
      setNotify({
        ...notify,
        notifications: notify.notifications,
        N: val,
        allRead: n === 0 ? true : false
      });
    }
  };
  useEffect(() => {
    notifications(notify.N);
  }, [notify.N]);

  useEffect(() => {
    setNotify({
      ...notify,
      notify_length: notify.notifications.length,
      N: notify.notifications.length
    });
    //Calling notifications to set allread to true
  }, []);

  //question-3
  const [duplicate, setDuplicate] = React.useState([]);
  useEffect(() => {
    let a = [1, 2, 2, 3, 4, 4, 5];
    let b = [];
    a.filter((p, i) => {
      if (!b.includes(p)) b.push(p);
    });
    setDuplicate(b);
  }, []);

  //question-4
  const [project, setProject] = React.useState({
    data: [
      {
        name: "project1"
      },
      {
        name: "project2"
      },
      {
        name: "project3"
      },
      {
        name: "new"
      }
    ],
    selected_project: "",
    new_project: ""
  });
  //select project
  const [newOpen, setOpenNew] = React.useState(false);

  const selectProject = (val) => {
    if (val === "new") {
      setOpenNew(true);
    } else {
      setProject({
        ...project,
        selected_project: val
      });
    }
  };
  const addNewProject = (val) => {
    let data = {
      name: project.new_project
    };
    project.data.push(data);
    setProject({
      ...project,
      new_project: "",
      selected_project: val
    });
    setOpenNew(false);
  };
  return (
    <div>
      {/* For Ant we have used  */}
      {/* <Table columns={columns}  dataSource={state.data && state.data.length>0?state.data:""}  pagination={false}
             /> */}

      {/* For material ui we are using */}
      <Grid container>
        <Filter
          state={state.filters}
          addFilter={addFilter}
          types={types}
          inputs={columns}
          conditions={conditions}
          actions={handleActions}
        />
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns &&
                  columns.map((k, i) => (
                    <TableCell align="center" className={classes.headstiky}>
                      <Typography
                        variant={"button"}
                        className={classes.tableTitle}
                      >
                        {k["title"]}
                      </Typography>
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {state.data.length > 0 &&
                state.data.map((k, i) => (
                  <TableRow hover key={i}>
                    <TableCell align="center" className={classes.tBody}>
                      {i + 1}
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
                ))}
            </TableBody>
          </Table>
          <button type="button" onClick={() => handleOpen(true)}>
            Open Modal
          </button>
          {/* <Grid container direction="row" alignItems="stretch"> */}
        </Paper>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
        <Modal
          open={open}
          onClose={() => handleOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <FormControl className={classes.formControl}>
            <Select
              variant={"outlined"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={project.selected_project}
              onChange={(e) => selectProject(e.target.value)}
            >
              {project.data.length > 0 &&
                project.data.map((p, ind) => (
                  <MenuItem value={p.name}>{p.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Modal>
      </Grid>
      {/* </Grid> */}

      {/* <Grid item xs={4} sm={4} md={4} lg={2} xl={2}> */}
      <Dialog
        onClose={() => handleNewOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={newOpen}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Standard"
            value={project.new_project}
            onChange={(e) =>
              setProject({ ...project, new_project: e.target.value })
            }
            placeholder={"Enter New Project"}
          />
          <Button
            color={"primary"}
            onClick={() => addNewProject(project.new_project)}
          >
            {" "}
            Add New Project{" "}
          </Button>
        </form>
      </Dialog>
      {/* </Grid> */}
    </div>
  );
};
