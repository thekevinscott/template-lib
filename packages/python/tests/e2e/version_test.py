import subprocess


def test_prints_version():
    result = subprocess.run(
        ["mynewproduct", "--version"],
        capture_output=True,
        text=True,
        check=True,
    )
    assert result.stdout.startswith("mynewproduct ")
