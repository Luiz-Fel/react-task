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

function User({firstNameLastName, email, phone, company, jobTitle }: UserProps) {
    return (
    <div>
        <div className="user">
            <div className='left-side'>
                <h2 className="username">{firstNameLastName}</h2>
                <h3 className="user-job">{jobTitle}</h3>
            </div>
            <div className='right-side'>
                <p>{company}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div> 
        </div>
    </div>
  )
}

export default User