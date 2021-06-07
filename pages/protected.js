// import withAuth from '../HOC/withAuth'
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

const Protected = () => {

    const {data, error} = useSWR('/api/me', async function(args) {
        const res = await fetch(args);
        return res.json();
      });

      if (error) return <div>failed to load</div>
      if (!data) return <div>loading. . .</div>
      return <div>hello {data.email} </div>
}

export default Protected;