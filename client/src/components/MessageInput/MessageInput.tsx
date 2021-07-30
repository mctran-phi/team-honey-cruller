import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { sendMessage } from '../../helpers/APICalls/conversations';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  otherUserId: string;
  otherUsername: string;
}

const MessageInput = ({ otherUserId, otherUsername }: Props): JSX.Element => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const { loggedInUser } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loggedInUser && inputRef.current) {
      sendMessage({ to: otherUserId, message: inputRef.current.value });
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl fullWidth hiddenLabel>
        <Grid container alignContent="center" className={classes.inputContainer}>
          <Grid item xs={10}>
            <Input
              placeholder={`Reply to ${otherUsername}`}
              className={classes.input}
              name="text"
              inputProps={{
                ref: inputRef,
              }}
              disableUnderline={true}
            />
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" className={classes.sendBtn} size="large">
              Send
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default MessageInput;
