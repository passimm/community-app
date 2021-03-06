/**
 * Chunk loader for the payments segment.
 */

import LoadingIndicator from 'components/LoadingIndicator';
import PT from 'prop-types';
import React from 'react';
import { SplitRoute } from 'utils/router';

export default function Payment({ base }) {
  return (
    <SplitRoute
      chunkName="sandbox-payment/chunk"
      renderClientAsync={() =>
        import(/* webpackChunkName: "sandbox-payment/chunk" */ './Router')
        .then(({ default: Router }) => <Router base={base} />)
      }
      renderPlaceholder={() => <LoadingIndicator />}
    />
  );
}

Payment.propTypes = {
  base: PT.string.isRequired,
};
