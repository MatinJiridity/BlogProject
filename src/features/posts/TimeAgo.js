import parseISO from "date-fns/parseISO";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TimeAgo = ({ timestamp }) => {
    let timeago = ''
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeago = `${timePeriod} ago`
    }
    return (
        <span title={timestamp}>
            &nbsp; <i>{timeago}</i>
        </span>
    )
}

export default TimeAgo