

import React from 'react';
import type { Votes } from '../../types/votes'; 

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => (
  <section>
    <p>Good: {votes.good}</p>
    <p>Neutral: {votes.neutral}</p>
    <p>Bad: {votes.bad}</p>
    <p>Total : {totalVotes}</p>
    <p>Positive: {positiveRate}%</p>
  </section>
);

export default VoteStats;