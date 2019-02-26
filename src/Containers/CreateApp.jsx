import { Add as AddIcon } from '@material-ui/icons';
import {
  CircularProgress,
  Fab,
  Button,
  Grid,
  Modal,
  Paper,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery, useMutation } from 'react-apollo-hooks';
import React, { useState } from 'react';
import gql from 'graphql-tag';

import CategoriesSelect from 'Containers/CategoriesSelect';

const GET_ROLE = gql`
  query currentRole {
    me {
      role
    }
  }
`;

const CREATE_APP = gql`
  mutation createApp(
    $category: String!
    $description: String
    $name: String!
    $url: String!
  ) {
    createApp(
      name: $name
      category: $category
      description: $description
      url: $url
    ) {
      id
    }
  }
`;

const useStyles = makeStyles(theme => ({
  buttonProgress: {
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    position: 'absolute',
    top: '50%'
  },
  fab: {
    bottom: theme.spacing(1),
    position: 'absolute',
    right: theme.spacing(1)
  },
  flex: {
    display: 'flex'
  },
  margin: {
    margin: theme.spacing.unit
  },
  paper: {
    boxShadow: theme.shadows[5],
    margin: 'auto',
    marginTop: '25%',
    outline: 'none',
    padding: theme.spacing.unit * 4,
    width: 'fit-content'
  },
  wrapper: {
    position: 'relative'
  }
}));

const CreateApp = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { data, loading } = useQuery(GET_ROLE);
  const createApp = useMutation(CREATE_APP, {
    refetchQueries: ['apps', 'category'],
    update: () => {
      setOpen(false);
    },
    variables: { category, description, name, url }
  });
  if (loading) {
    return null;
  }
  if (data.me && (data.me.role === 'ADMIN' || data.me.role === 'EDITOR')) {
    return (
      <React.Fragment>
        <Fab
          aria-label="Create App"
          className={classes.fab}
          color="primary"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
        <Modal
          classes={{
            root: classes.flex
          }}
          onClose={() => setOpen(false)}
          open={isOpen}
        >
          <Paper className={classes.paper}>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  className={classes.margin}
                  fullWidth
                  label="Name"
                  onChange={event => setName(event.target.value)}
                  type="text"
                  value={name}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.margin}
                  fullWidth
                  label="Description"
                  multiline
                  onChange={event => setDescription(event.target.value)}
                  type="text"
                  value={description}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <CategoriesSelect
                  classes={classes}
                  setValue={setCategory}
                  value={category}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.margin}
                  fullWidth
                  label="Url"
                  onChange={event => setUrl(event.target.value)}
                  type="text"
                  value={url}
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.wrapper} item>
                <Button
                  className={classes.margin}
                  color="primary"
                  disabled={isLoading}
                  fullWidth
                  onClick={() => {
                    setLoading(true);
                    createApp();
                  }}
                  variant="outlined"
                >
                  Create App
                </Button>
                {isLoading && (
                  <CircularProgress
                    className={classes.buttonProgress}
                    size={24}
                  />
                )}
              </Grid>
            </Grid>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
  return null;
};

export default CreateApp;
