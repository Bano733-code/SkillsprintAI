function SkillCard({title, skills}) {

return (

<div className="rounded-2xl bg-white p-6 shadow">

<h3 className="text-xl font-bold">
{title}
</h3>


<ul className="mt-4 space-y-2">

{
skills.map((skill,index)=>(

<li
key={index}
className="rounded-lg bg-blue-50 p-3"
>
{skill}
</li>

))
}

</ul>

</div>

)

}

export default SkillCard;