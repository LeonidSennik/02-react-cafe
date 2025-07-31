

import React from 'react';
import type { VoteStatsProps } from '../../types/votes'; 

const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => (
  <section>
    <p>Good: {votes.good}</p>
    <p>Neutral: {votes.neutral}</p>
    <p>Bad: {votes.bad}</p>
    <p>Total Votes: {totalVotes}</p>
    <p>Positive Rate: {positiveRate}%</p>
  </section>
);

export default VoteStats;