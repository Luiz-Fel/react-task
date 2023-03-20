import './user.scss';

interface UserProps {
    key: any;
    id: number;
    firstNameLastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
}

function User({id, firstNameLastName, email, phone, company, jobTitle }: UserProps) {

    return (
    <div>
        <div className="user">
            <div className="username">{firstNameLastName}</div>
            <div className="user-email">{email}</div>
            <div className="user-phone">{phone}</div>
            <div className="user-company">{company}</div>
            <div className="user-job">{jobTitle}</div>
        </div>
    </div>
  )
}

export default User