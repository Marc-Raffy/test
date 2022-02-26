import Head from 'next/head';
import { Box, Button, Container, Typography } from '@mui/material';

const licenses_text_1 = (
  <p>
    License n°1:
    <br/><br/>
    MIT License
    <br/>
    Copyright (c) 2017 Creative Tim
    <br/><br/>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    <br/>
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    <br/>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    <br/><br/><br/>
  </p>);
const licenses_text_2 = (
  <p>
    License n°2:
    <br/><br/>
    MIT License
    <br/>
    Copyright (c) Facebook, Inc. and its affiliates.
    <br/><br/>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    <br/>
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    <br/>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  </p>);




const Licenses = () => (
  <>
    <Head>
      <title>
        Licenses
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
          >
            {licenses_text_1}{licenses_text_2}
          </Typography>
        </Box>
      </Container>
    </Box>
  </>
);

export default Licenses;
