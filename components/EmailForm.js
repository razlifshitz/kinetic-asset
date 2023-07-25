import React, { useState } from 'react';
import { TextField, Grid, Typography, IconButton } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const EmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = event => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <Grid container spacing={2} alignItems="center" justifyContent="start">
        <Grid item xs={12}>
          <Typography variant="body1" align="start">
            For more info:
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            name="email"
            type="email"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconButton type="submit" color="inherit" size="small">
            <SendIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: '200px' }}>
          <div>
            <Typography
              variant="body1"
              align="start"
              sx={{ visibility: isSubmitted ? 'visible' : 'hidden' }}>
              Thank you for your submission!
            </Typography>
            <Typography
              variant="body1"
              align="start"
              sx={{ visibility: isSubmitted ? 'visible' : 'hidden' }}>
              We will contact you soon.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmailForm;
