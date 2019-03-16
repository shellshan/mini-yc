import moment from 'moment'

export function timeCal(t){
        const st = moment.unix(t).utc();
        const et = moment.utc();
        return moment.duration(st.diff(et)).humanize();
}
