import type { Votes } from '../../types/votes';
const VoteStats = ({ votes, totalVotes, positiveRate }: {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}) => {
  return (
    <div>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total Votes: {totalVotes}</p>
      <p>Positive Rate: {positiveRate}%</p>
    </div>
  );
};

export default VoteStats;