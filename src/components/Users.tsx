
interface UserProps {
    key: any;
    id: number;
    firstNameLastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
}

function Users({id, firstNameLastName, email, phone, company, jobTitle }: UserProps) {

    return (
    <div>
        <div className="user">
            <div className="user__id">{id}</div>
            <div className="user__name">{firstNameLastName}</div>
            <div className="user__email">{email}</div>
            <div className="user__phone">{phone}</div>
            <div className="user__company">{company}</div>
            <div className="user__job">{jobTitle}</div>
        </div>
    </div>
  )
}

export default Users