/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from 'react';
import { styled } from '@superset-ui/core';
import { ModalPluginProps, ModalPluginStylesProps } from './types';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

const Styles = styled.div<ModalPluginStylesProps>`
  background-color: rgba(255,255,255,0.08);
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  h3 {
    /* You can use your props to control CSS! */
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
    font-size: ${({ theme, headerFontSize }) => theme.typography.sizes[headerFontSize]}px;
    font-weight: ${({ theme, boldText }) => theme.typography.weights[boldText ? 'bold' : 'normal']};
  }

  pre {
    height: ${({ theme, headerFontSize, height }) => (
      height - theme.gridUnit * 12 - theme.typography.sizes[headerFontSize]
    )}px;
  }
`;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};


export default function ModalPlugin(props: ModalPluginProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const {data:data2, height, width, cols, metrics } = props;
  // @ts-ignore
  const metr = metrics[0]; 
  // @ts-ignore
  const data = data2.map((el) => ({ label: el[cols[0]], value: el[metr] }));
  const rootElem = createRef<HTMLDivElement>();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = React.useState<{ label: string, value: number }>({ label: '', value: 0 });
  // @ts-ignore
  const handleOpen = (event, d) => {
    setOpen(true);
    let { dataIndex } = d;
    setModalData(data[dataIndex]);
    console.log("========================== FROM CLICK ==========================", data[dataIndex])
  }

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  }, []);

  return (
    // <Styles
    //   ref={rootElem}
    //   boldText={props.boldText}
    //   headerFontSize={props.headerFontSize}
    //   height={height}
    //   width={width}
    // >
    //   <PieChart
    //     series={[
    //       {
    //         innerRadius: 30,
    //         arcLabelMinAngle: 45,
    //         data,
    //         highlightScope: { faded: 'global', highlighted: 'item' },
    //         faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
    //         cx: 200,
    //       },
    //     ]}
    //     width={width*0.9}
    //     height={height*0.9}
    //     style={{color: 'red'}}
    //     onItemClick={(event, d) => handleOpen(event, d)}
    //     slotProps={{
    //       legend: {
    //         labelStyle: {
    //           fontSize: 17,
    //           fill: 'white',
    //         },
    //       },
    //     }}
    //     />  
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography id="modal-modal-title" variant="h6" component="h2">
    //         {modalData.label.toUpperCase()}
    //       </Typography>
    //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //         {modalData.value}
    //       </Typography>
    //     </Box>
    //   </Modal>
    // </Styles>
    <>
      <iframe src="" frameBorder="0"></iframe>
    </>
  );
}
